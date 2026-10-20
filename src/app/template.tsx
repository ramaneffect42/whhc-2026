// A template re-mounts on every navigation, so this CSS animation replays on each
// page change. Pure CSS = zero JS cost, and content is visible even before hydration.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
