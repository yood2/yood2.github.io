import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { recipes } from '../data/recipes';

export default function Generator() {
    const [coffee, setCoffee] = useState('');
    const [water, setWater] = useState('');
    const [recipe, setRecipe] = useState('');

    const handleCalculate = () => {
        console.log({
            coffee,
            water,
            recipe,
        });
    };

    return (
        <>
            <Card className="">
                <CardHeader>
                    <CardTitle>Calculator</CardTitle>
                    <CardDescription>
                        ... for your coffee ratios and pour times.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="ratio">Ratio</Label>
                                <div className="flex items-center gap-4">
                                    <Input
                                        id="coffee"
                                        placeholder="Coffee"
                                        value={coffee}
                                        onChange={(e) =>
                                            setCoffee(e.target.value)
                                        }
                                    />
                                    :
                                    <Input
                                        id="water"
                                        placeholder="Water"
                                        value={water}
                                        onChange={(e) =>
                                            setWater(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="recipe">Recipe</Label>
                                <Select
                                    onValueChange={(value) => setRecipe(value)}
                                >
                                    <SelectTrigger id="recipe">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        {recipes.map((recipe, index) => (
                                            <SelectItem
                                                key={index}
                                                value={recipe.title}
                                            >
                                                {recipe.title}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={handleCalculate}>Calculate</Button>
                </CardFooter>
            </Card>
        </>
    );
}
