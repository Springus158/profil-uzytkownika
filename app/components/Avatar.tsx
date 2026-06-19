type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
};

export default function Avatar({ src, alt, size = 96 }: AvatarProps) {
  return (
    <span
      className="relative inline-flex shrink-0 overflow-hidden rounded-full ring-4 ring-white/80 shadow-lg dark:ring-slate-800/80"
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
