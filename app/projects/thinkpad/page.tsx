'use client';

import Image from 'next/image';
import BlurFade from '@/components/ui/blur-fade';
import acer from './acer-aspire-m5630.jpg';
import ebay from './ebay.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Thinkpad() {
    return (
        <>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                The T440p
            </h2>
            <p className="text-sm text-muted-foreground">
                Last Updated: March 24, 2025
            </p>
            <p className="text-base sm:text-lg">
                Growing up, I was fascinated by computers, beginning with an old
                Acer desktop that struggled to run even basic games like
                Maplestory. After years of request, I was first exposed to PC
                building when my mom enlisted a friend&apos;s help to assemble a
                computer from spare parts. I remember thinking how cool it was
                at that time.
                <br />
                <br />
                Fast forward to today, I recently rediscovered my passion and
                transitioned into computer science. Rather than building a
                desktop, I wanted to try my hand at modding a
                laptop—specifically a ThinkPad—due to its affordability,
                portability, and strong community support.
            </p>
            <BlurFade delay={0.25} inView>
                <Image
                    src={acer}
                    alt="Acer Aspire T180"
                    width={800}
                    height={600}
                />
            </BlurFade>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                The Beginning
            </h2>
            <p className="text-base sm:text-lg">
                I purchased my ThinkPad T440p through ebay for a decent price.
                At the time of writing (March 2025) the CAD has been pretty
                weak, so I was pretty happy with being able to get a pristene
                model for $159CAD. The initial spec sheet:
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Intel Core i5-4300M @2.6Ghz</li>
                <li>8GB DDR3 RAM</li>
                <li>256GB SSD</li>
                <li>14&quot; 1366x768 TN Panel</li>
                <li>No backlit keyboard 😔</li>
                <li>Windows 10 Pro</li>
            </ul>
            <BlurFade delay={0.25} inView>
                <Image
                    src={ebay}
                    alt="Acer Aspire T180"
                    width={800}
                    height={600}
                />
            </BlurFade>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                References
            </h2>
            <p className="text-base sm:text-lg">
                This project would would not have been possible without the
                following resources:
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                    <Link href="https://web.archive.org/web/20230807224128/https://octoperf.com/blog/2018/11/07/thinkpad-t440p-buyers-guide/">
                        <Button variant="link">
                            Jerome Loisel's "Thinkpad T440p Ultimate Buyer's
                            Guide"
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href="https://seiba.gitlab.io/thinkpad-t440p-upgrade-guide/">
                        <Button variant="link">
                            Thinkpad T440p Upgrade Guide
                        </Button>
                    </Link>
                </li>
            </ul>
        </>
    );
}
