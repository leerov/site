import ErrorDisplay from '@/ui/ErrorDisplay/ErrorDisplay';

export default function NotFound() {
  return <ErrorDisplay code={404} message="Страница не найдена" />;
}