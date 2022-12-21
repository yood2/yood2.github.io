---
layout: post
title: Webscraping data from Grailed using Python and Selenium
---
![grailed's logo]({{site.baseurl}}/assets/images/post_1/grailed-image.png)

# What is Grailed? 🤔
As someone with a passion for fashion and the online market for high-end clothing, I have become a huge fan of Grailed - an online platform that allows individuals to buy and sell designer and sartorial clothing. While using the platform, I realized that designer pieces could be seen as speculative assets, similar to stocks or cryptocurrencies, with the potential for significant returns. To take advantage of this opportunity, I decided to use a data analysis approach for market research and eventually plan to create a machine learning model to help predict closing prices. In this post, I will focus on the first step towards that goal: using Python and Selenium to gather sold item data from Grailed through a web scraper.

As a quick disclaimer, I'm mostly a self-taught coder, so if you see any glaring issues with my code or have any suggestions feel free to reach out! I would love to hear your thoughts!

# Resources 🚗
You'll probably need all of these if you want to follow along:
- [Python](https://www.python.org/)
- [Selenium](https://www.selenium.dev/)
- [ChromeDriver](https://chromedriver.chromium.org/downloads) (Get the drivers pertaining to your browser of choice)
- [Selenium Documentation for Python Coders](https://selenium-python.readthedocs.io/)

### Why Selenium?
Some readers with advanced technical knowledge may be wondering why I chose to use Selenium for this project. While Selenium is a powerful framework for browser automation, many people argue that more lightweight options such as BeautifulSoup or data scraping-specific options like Scrapy would be more suitable. While these are valid points, I opted for Selenium due to the fact that certain components on the Grailed.com website, like the item feed, require a full browser to load properly. While other frameworks and libraries do offer work arounds for this, I found Selenium to be the easiest solution in the short term, especially since gathering the data is only the first step in my project. 

In terms of speed, if you want to improve the run-time for a similar program, I would advise using Selenium for the navigation alongside a faster parser like BeautifulSoup to gather the data from the HTML.

# Step 1: Handling the Login Screen 🤸
First, we have to handle the log-in wall Grailed has when you try to access their [sold listings page](https://www.grailed.com/sold). Instead of fully automating this process, I have programmed my scraper to pause the WebDriver after entering the user details, to give the user a chance to complete the captcha themself (this implementation is done in the main() function, but should be easy to implement yourself). You can see below my code for this function:
```python
def user_login(driver):
    print("> user_login() called...")
    
    email = "" #email goes here
    password = "" #password goes here

    # Find log in button
    try:
        log_in_button = WebDriverWait(driver, WAIT_TIME).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[3]/div[7]/div/div/div/div[2]/div/div/p[2]/a"))
        ).click()
    except:
        print("> ERROR: Not able to find log in button")
        driver.quit()

    # Find log in with email button
    try:
        log_in_email_button = WebDriverWait(driver, WAIT_TIME).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[3]/div[7]/div/div/div/div[2]/div/div/button[4]"))
        ).click()
    except:
        print("> ERROR: Not able to find 'Log in with Email' button")
        driver.quit()

    # Find user field
    try:
        user_field = WebDriverWait(driver, WAIT_TIME).until(
            EC.presence_of_element_located((By.XPATH, "//*[@id='email']"))
        ).send_keys(email)
        (driver.find_element(By.XPATH, "//*[@id='password']")).send_keys(password, Keys.RETURN)
    except:
        print("> ERROR: Not able to enter user details")
        driver.quit()
    
    print("> user_login() completed...")
```
Just a quick note, while I personally used XPATH out of laziness to find the elements I need, the general recommendation when building Selenium automation programs is to go for specific CSS selector like ID or Class first. This is because XPATH addresses are volatile, and more likely to change during a website's life cycle. In the case of Grailed.com, the XPATH address can even change from the dimension of the browser and other factors, so keep this in mind when coding your own scraper. 

Aside from that, the rest of the code should be self-explanatory; multiple explicit waiting try-blocks that give each element the opportunity to load before performing an action on it.

# Step 2: Pulling the links for all relevant listings 🤸
After logging in and selecting which designers/categories I wanted to scrape, the next step was to implement a function that gathered all the HREF values from the listings I was interested in. The challenge with this step was to overcome the fact that Grailed only ever loaded 40 listings at a time, with a endlessly scrolling feed design for all of its listings. To counter this, I had implemented an automatic scrolling script[^1] that stopped scrolling if the number of listings found equalled the total number of listings, or if the feed wouldn't load any more. Theres also a cheeky if statement included at the end in case I wanted to call the function recursively.
```python
def link_pull(driver):
    print("> link_pull() called...")

    # Get number of total listings
    try:
        element = WebDriverWait(driver, WAIT_TIME).until(
            EC.visibility_of_element_located((By.XPATH, "/html/body/div[3]/div[7]/div/div/div/div[1]/div[1]/div[1]/div/span"))
        )
        total_listings = int(((element.text.split())[0]).replace(',', ''))
        print("> Total Listings Claimed: ", total_listings)
        WebDriverWait(driver,10)
    except:
        print("> ERROR: Timed out waiting for page to load")
        driver.close()
    
    # Keep scrolling until total listings = listings found, or listings found is close to total listings and page doesnt load any more
    SCROLL_PAUSE_TIME = 1
    last_cycle = 0
    while True:
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(SCROLL_PAUSE_TIME)
        elements = driver.find_elements(By.CLASS_NAME, "feed-item")
        loaded_listings = len(elements)
        if loaded_listings == total_listings:
            print("> Found all listings, stopping scroll")
            break
        if last_cycle == loaded_listings:
            print("> Almost found all listings, stopping scroll")
            break
        last_cycle = loaded_listings
    
    # Gather all href links to list and output into csv file
    elements = driver.find_elements(By.CLASS_NAME, "listing-item-link")
    links = []
    for element in elements:
        links.append(element.get_attribute('href'))
    with open('links.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        for link in links:
            writer.writerow([link])
    print("> links.csv file exported...")
    print("> Total Links Found: ", len(links))

    if total_listings != loaded_listings:
        print("> Total Listings != Loaded Listings...")
        if input("> Redo link_pull()? 'Y' or 'N: ") == 'Y':
            link_pull(driver)
        else:
            print("> link_pull() completed...")
```
After all this is done, you should have outputted a csv file with all of your links that looks like this:
![links.csv]({{site.baseurl}}/assets/images/post_1/links_sheet.png)

# Step 3: Opening the links and collecting the data 🤸
Finally, the last function is meant to do the following: parse through the csv file of links, open each link, and gather all the relevant data. In this case, the relevant data would be: the designer, item category, listing description, size, color, condition, original price, and sold price. After data is extracted from each listing, it would append another csv file with all of the information.
```python
def data_pull(driver):
    print("> data_pull() called...")

    # Open output file
    with open('data.csv', 'a', newline='') as outfile:
        fieldnames = ['designer', 'category', 'descript', 'size', 'color', 'condition', 'original_price', 'sold_price']
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)
        writer.writeheader()

        # Open input file of links
        try:
            with open('links.csv', 'r', newline='') as infile:
                reader = csv.reader(infile)
                for row in reader:
                    driver.get(row[0])
                    # Get designer info
                    try:
                        designer = WebDriverWait(driver, DATA_PULL_WAIT_TIME).until(
                            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/main/div[2]/nav/ol/li[1]/a"))
                        ).text
                    except:
                        print("> ERROR: could not get designer data")
                        designer = ''

                    # Get category info
                    try:
                        category = WebDriverWait(driver, DATA_PULL_WAIT_TIME).until(
                            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/main/div[2]/nav/ol/li[4]/a"))
                        ).text
                    except: 
                        print("> ERROR: could not get category data")
                        category = ''

                    # Get descript info
                    try:
                        descript = WebDriverWait(driver, DATA_PULL_WAIT_TIME).until(
                            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/main/div/div[1]/div[2]/div[1]/div[2]/h1"))
                        ).text
                    except: 
                        print("> ERROR: could not get descript data")
                        category = ''

                    # Get size info
                    try:
                        size = WebDriverWait(driver, DATA_PULL_WAIT_TIME).until(
                            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/main/div/div[1]/div[2]/div[1]/div[2]/p[2]/span"))
                        ).text
                    except: 
                        print("> ERROR: could not get size data")
                        size = ''

                    # Get color info
                    try:
                        color = WebDriverWait(driver, DATA_PULL_WAIT_TIME).until(
                            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/main/div/div[1]/div[2]/div[1]/div[2]/p[3]/span"))
                        ).text
                    except: 
                        print("> ERROR: could not get color data")
                        color = ''

                    # Get condition info
                    try:
                        condition = WebDriverWait(driver, DATA_PULL_WAIT_TIME).until(
                            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/main/div/div[1]/div[2]/div[1]/div[2]/p[4]/span"))
                        ).text
                    except: 
                        print("> ERROR: could not get condition data")
                        condition = ''
                    
                    # Get condition info
                    try:
                        original_price = WebDriverWait(driver, DATA_PULL_WAIT_TIME).until(
                            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/main/div[2]/div[1]/div[2]/div[1]/div[3]/span[2]"))
                        ).text
                    except: 
                        print("> ERROR: could not get original_price data")
                        original_price = ''

                    # Get condition info
                    try:
                        sold_price = WebDriverWait(driver, DATA_PULL_WAIT_TIME).until(
                            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/main/div[2]/div[1]/div[2]/div[1]/div[3]/span[1]"))
                        ).text
                    except: 
                        print("> ERROR: could not get sold_price data")
                        sold_price = ''
                    
                    # Write new row in output file
                    writer.writerow({'designer': designer, 'category': category, 'descript': descript, 'size': size, 'color': color, 'condition': condition, 'original_price': original_price, 'sold_price': sold_price})
        except:
            print("ERROR: links.csv could not be opened")

        print("> data_pull() completed...")
```
Your final outputted csv file should look like this:
![grailed's logo]({{site.baseurl}}/assets/images/post_1/data_sheet.png)

# Conclusion
Hopefully, after following the steps that I took, you also have a working Grailed webscraper. Not a bad way to spend an afternoon! If you want, you can check out my full code on my [GitHub page](https://github.com/yood2/soldListingScraper). Eventually, we will need to clean this raw data and fit it into a machine learning model if we want to get any interesting information from it. But for now, give yourself a pat on the back for finishing the article.

Again, if you have any other suggestions or feedback, feel free to reach out via email! I would love to hear from fellow data/coding enthusiasts!

### Footnotes:
[^1]: The scrolling script was built off of a template done by [Artjom B.](https://stackoverflow.com/questions/28928068/scroll-down-to-bottom-of-infinite-page-with-phantomjs-in-python/28928684#28928684)