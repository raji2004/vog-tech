import {H1, P} from "@/components/typography";
import Link from "next/link";
import {CircleX } from 'lucide-react'
import { Button } from "@/components/button";



export default function NotFound() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-section-padding-sm md:p-section-padding">
        <CircleX size={50} className="text-primary mb-4" />
      
        <H1 className="text-6xl font-bold text-primary mb-2">404</H1>
      
        <P className="text-lg text-gray-600 mb-6">Oops! Page not found.</P>
      
        <Link href="/" className="mt-8">
          <Button className="text-white bg-primary hover:bg-primary-dark transition-colors duration-200 px-6 py-3 rounded-full">
            Go back home
          </Button>
        </Link>
      </div>
      
      
    )
}