import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  buttonVariant?: 'primary' | 'secondary';
}

export default function Banner({
  title,
  description,
  buttonText,
  buttonHref,
  buttonVariant = 'primary',
}: BannerProps) {
  return (
    <div className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-primary-foreground/80">{description}</p>
          </div>
          <div>
            <Button
              asChild
              variant={buttonVariant === 'primary' ? 'secondary' : 'outline'}
              className="text-base"
            >
              <Link href={buttonHref}>
                {buttonText}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 