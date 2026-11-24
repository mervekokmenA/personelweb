import { LoginForm } from "./login-form";

export const dynamic = "force-dynamic";

export default async function GirisPage({ searchParams }: { searchParams: Promise<{ git?: string }> }) {
  const { git } = await searchParams;
  return (
    <div className="mx-auto mt-16 flex w-full max-w-sm flex-col gap-4">
      <h1 className="text-2xl font-semibold">Kişisel Panel</h1>
      <p className="text-sm text-muted">Devam etmek için parolayı gir. Bu cihazda oturum yaklaşık 6 ay açık kalır.</p>
      <div className="card p-5">
        <LoginForm next={git ?? "/"} />
      </div>
    </div>
  );
}
