import { h } from 'preact';

export function TypingIndicator() {
  return (
    <div class="flex mb-2 md:mb-2.5">
      <div class="flex flex-col w-fit max-w-[86%] md:max-w-[min(78%,42rem)] items-start">
        <span class="block text-[18px] md:text-[20px] mb-2 md:mb-2.5 leading-none font-['Satisfy'] font-normal text-[#C7B287] tracking-[0.02em]">
          Cathia
        </span>
        <div class="bg-white w-fit max-w-full py-2.5 md:py-3 px-3.5 md:px-4 rounded-[4px_16px_16px_16px] md:rounded-[4px_18px_18px_18px] flex gap-1 md:gap-[5px] items-center shadow-[0_1px_3px_rgba(0,0,0,.06)]">
          <div
            class="w-1.5 h-1.5 md:w-[7px] md:h-[7px] bg-[#c4b9a8] rounded-full animate-bounce"
            style={{ animationDelay: '0s', animationDuration: '1.2s' }}
          />
          <div
            class="w-1.5 h-1.5 md:w-[7px] md:h-[7px] bg-[#c4b9a8] rounded-full animate-bounce"
            style={{ animationDelay: '.2s', animationDuration: '1.2s' }}
          />
          <div
            class="w-1.5 h-1.5 md:w-[7px] md:h-[7px] bg-[#c4b9a8] rounded-full animate-bounce"
            style={{ animationDelay: '.4s', animationDuration: '1.2s' }}
          />
        </div>
      </div>
    </div>
  );
}
