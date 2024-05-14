import cn from "@/lib/utils";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Team", href: "/team", current: false },
  { name: "Projects", href: "/project", current: false },
  { name: "Uses", href: "/use", current: false },
];

//if i use like object instead array. would i still map methods to sort out the array?

const Navbar = () => {
  return (
    <header className=" flex justify-center  ">
      <div className="max-w-md shadow-xl border-white   rounded-full">
        <nav className=" p-4 m-4 ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn("rounded-md px-3 py-2 text-sm font-bold ", {
                // Apply styles for the current navigation item
                "  hover:text-slate-500 ": item.current,
                // Apply styles for non-current navigation items
                "text-slate-950 hover:text-slate-500 ": !item.current,
              })}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

{
  /* // <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"><li><a class="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400" href="/about">About<span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span></a></li><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">Articles</a></li><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a></li><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/speaking">Speaking</a></li><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/uses">Uses</a></li></ul> */
}
