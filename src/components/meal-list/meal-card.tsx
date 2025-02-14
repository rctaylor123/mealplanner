import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';
import Image from 'next/image';
import { AspectRatio } from '@/src/components/ui/aspect-ratio';

interface MealCardProps {
  day: string;
  meal: string;
}

export function MealCard({ day, meal }: MealCardProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{day}</CardTitle>
          <CardDescription>{meal}</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className='bg-muted'>
            <Image
              src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Generic Image'
              fill
              priority
              className='rounded-md'
            />
          </AspectRatio>
        </CardContent>
      </Card>
    </>
  );
}
