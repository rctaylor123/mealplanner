import { Navbar } from '@/src/components/navbar/navbar';
import { MealCard } from '@/src/components/meal-list/meal-card';
import { WeekPicker } from '@/src/components/meal-list/week-picker';

export default function Home() {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Navbar />
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10'>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-lg md:text-2xl'>Meal Plan</p>
            </div>
            <div>
              <WeekPicker />
            </div>
          </div>
          <div className='grid auto-rows-min gap-2 md:grid-cols-5'>
            <MealCard day='Monday' meal='Meatballs' />
            <MealCard day='Tuesday' meal='Mac n Cheese' />
            <MealCard day='Wednesday' meal='Lasagna' />
            <MealCard day='Thursday' meal='Pork' />
            <MealCard day='Friday' meal='Pizza' />
          </div>
        </div>
      </main>
    </div>
  );
}
