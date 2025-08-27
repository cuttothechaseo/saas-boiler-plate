import { SignInButton, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <SignInButton />
          <UserButton />
        </div>
        <ThemeToggle />
      </div>
      <div className="p-4">
        <div className="font-bold text-2xl mb-4">Move Goal</div>
        <p className="mb-4">Testing dark mode - this text should be light in dark mode</p>
        <div className="bg-card p-4 rounded border">
          Card background test - this should have proper contrast in both themes
        </div>
      </div>
    </div>
  );
}
