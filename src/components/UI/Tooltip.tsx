import * as React from 'react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipArrow } from '@radix-ui/react-tooltip';

interface TooltipComponentProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
  children: React.ReactNode;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({ content, position = 'top', children }) => {
  const tooltipClass = `tooltip-${position}`;
  
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent className={tooltipClass}>
        {content}
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipComponent;
