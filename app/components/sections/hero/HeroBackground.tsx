export function HeroBackground() {
  return (
    <>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
      {/* Subtle gradients */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-linear-to-b from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-purple-100/50 to-transparent dark:from-purple-900/20 dark:to-transparent" />
    </>
  );
}
