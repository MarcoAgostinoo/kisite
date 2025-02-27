export default function Loading() {
  return (
    <div className="bg-gray-50 pt-56 dark:bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-96 w-full bg-gray-200 dark:bg-gray-700 rounded-lg" />
          <div className="space-y-4">
            <div className="h-8 w-32 bg-secondaryBlue/20 rounded-full" />
            <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
          <div className="space-y-6">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}