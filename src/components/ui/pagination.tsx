'use client'

import { Button } from "@/components/ui/button"

export default function Pagination({
  page,
  setPage,
  totalPages,
}: {
  page: number
  setPage: (val: number) => void
  totalPages: number
}) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <Button
        variant="outline"
        size="sm"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Oldingi
      </Button>
      <span className="text-sm text-muted-foreground">
        Sahifa {page} / {totalPages}
      </span>
      <Button
        variant="outline"
        size="sm"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Keyingi
      </Button>
    </div>
  )
}
