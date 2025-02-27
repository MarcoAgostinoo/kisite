import Image from 'next/image';

interface AuthorInfoProps {
  author?: {
    name: string;
    avatar?: { url: string };
  };
  date: string;
}

const AuthorInfo = ({ author, date }: AuthorInfoProps) => {
  return (
    <div className="flex items-center space-x-4">
      {author && (
        <>
          {author.avatar?.url ? (
            <Image
              src={author.avatar.url}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-gray-200" />
          )}
          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              {author.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(date).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthorInfo;