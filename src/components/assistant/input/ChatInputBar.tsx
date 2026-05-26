import { h } from 'preact';

interface Props {
  input: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onKeyDown: (e: KeyboardEvent) => void;
}

export function ChatInputBar({ input, isLoading, onInputChange, onSend, onKeyDown }: Props) {
  return (
    <div class="py-2.5 px-3.5 md:py-3.5 md:px-[18px] border-t border-[#E8ECF0] flex items-center gap-1.5 md:gap-2 shrink-0 bg-white">
      <button
        class="w-8 h-8 md:w-9 md:h-9 border-0 bg-transparent text-[#B0A898] rounded-full flex items-center justify-center cursor-pointer transition-colors hover:text-[#C7B287] shrink-0"
        title="Suggestions"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          width="16"
          height="16"
          class="md:w-[18px] md:h-[18px]"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <textarea
        class="flex-1 bg-[#F5F3F0] border-0 rounded-3xl py-2 px-3.5 md:py-2.5 md:px-[18px] text-[13px] md:text-[13.5px] text-[#1A1A2E] resize-none outline-none leading-[1.4] max-h-[90px] min-h-9 md:min-h-10 placeholder:text-[#B0A898]"
        rows={1}
        placeholder="Je voudrais..."
        value={input}
        onInput={e => onInputChange((e.target as HTMLTextAreaElement).value)}
        onKeyDown={onKeyDown}
      />

      <button
        class="w-8 h-8 md:w-9 md:h-9 border-0 bg-transparent text-[#B0A898] rounded-full flex items-center justify-center cursor-pointer transition-colors hover:text-[#C7B287] shrink-0"
        title="Microphone"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          width="16"
          height="16"
          class="md:w-[18px] md:h-[18px]"
        >
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
        </svg>
      </button>

      <button
        class="w-[34px] h-[34px] md:w-[38px] md:h-[38px] bg-[#9CA3AF] text-white border-0 rounded-full flex items-center justify-center cursor-pointer shrink-0 transition-all hover:bg-[#6B7280] active:scale-[.93] disabled:bg-[#d1d5db] disabled:cursor-not-allowed"
        onClick={onSend}
        disabled={!input.trim() || isLoading}
        title="Envoyer"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width="15"
          height="15"
          class="md:w-[17px] md:h-[17px]"
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </div>
  );
}
