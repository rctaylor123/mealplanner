import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/src/components/ui/button';
import { ButtonGroup } from '@/src/components/util/button-group';

export function WeekPicker() {
  return (
    <>
      <ButtonGroup>
        <Button variant='outline' size='icon'>
          <ChevronLeft />
        </Button>
        <Button variant='outline' disabled>
          Feb 10 - Feb 14
        </Button>
        <Button variant='outline' size='icon'>
          <ChevronRight />
        </Button>
      </ButtonGroup>
    </>
  );
}
