'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';

import Link from 'next/link';

export interface ProjectProps {
    title: string;
    desc: string;
    tags: string[];
    source?: string;
    demo?: string;
}

const Demo = () => (
    <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
        ></path>
    </svg>
);

const Git = () => (
    <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
        ></path>
    </svg>
);

export default function Project(props: ProjectProps) {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="flex-grow">
                {/* <div className="aspect-video w-full relative mb-2">
                    <Image
                        src={props.image}
                        alt={`Image for ${props.title}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div> */}
                <CardTitle className="text-lg">{props.title}</CardTitle>
                <CardDescription className="text-sm">
                    {props.desc}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {props.tags.map((tag, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="mt-auto">
                <div className="flex flex-wrap gap-2">
                    {props.demo && (
                        <Link href={props.demo}>
                            <Badge className="cursor-pointer text-xs">
                                <Demo />
                                <span className="ml-1">Demo</span>
                            </Badge>
                        </Link>
                    )}
                    {props.source && (
                        <Link href={props.source}>
                            <Badge className="cursor-pointer text-xs">
                                <Git />
                                <span className="ml-1">Source</span>
                            </Badge>
                        </Link>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
