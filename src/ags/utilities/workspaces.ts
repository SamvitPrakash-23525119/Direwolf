export default function getWorkspaceGroup(
  currentId: number,
  size = 5,
): number[] {
  const page = Math.floor((currentId - 1) / size)
  const start = page * size + 1

  return Array.from({ length: size }, (_, i) => start + i)
}
