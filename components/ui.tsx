import React from 'react';

interface SelectProps<T extends string | number> {
  label: string;
  value: T;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: T; label: string }[];
}

export const SelectInput = <T extends string | number,>({ label, value, onChange, options }: SelectProps<T>) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-slate-800 mb-2">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full appearance-none bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.516 7.548c.436-.446 1.144-.446 1.58 0L10 10.434l2.904-2.886c.436-.446 1.144-.446 1.58 0 .436.446.436 1.164 0 1.61L10.79 12.8c-.436.446-1.144.446-1.58 0L5.516 9.158c-.436-.446-.436-1.164 0-1.61z" />
        </svg>
      </div>
    </div>
  </div>
);


interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

export const TextAreaInput: React.FC<TextAreaProps> = ({ label, value, onChange, placeholder }) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-slate-800 mb-2">{label}</label>
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={6}
      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none transition-colors"
    />
  </div>
);

export const LoadingSpinner: React.FC<{ message?: string }> = ({ message }) => (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-500"></div>
        <p className="text-slate-500">{message || 'Generating...'}</p>
    </div>
);

export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);
