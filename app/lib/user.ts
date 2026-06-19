export type Activity = {
  id: string;
  title: string;
  description: string;
  type: "commit" | "review" | "comment" | "deploy" | "task";
  date: string; // ISO
};

export type User = {
  name: string;
  email: string;
  role: string;
  location: string;
  avatarUrl: string;
  bio: string;
  joinedAt: string; // ISO
  activities: Activity[];
};

// W realnej aplikacji dane pochodziłyby z bazy / API.
export const user: User = {
  name: "Kacper Marciniak",
  email: "kacper@example.com",
  role: "Stażysta Frontend",
  location: "Warszawa, PL",
  avatarUrl: "https://i.pravatar.cc/240?img=12",
  bio: "Uczę się Next.js i Tailwind. Buduję interfejsy, które są szybkie i przyjemne w użyciu.",
  joinedAt: "2026-03-01T08:00:00.000Z",
  activities: [
    {
      id: "a1",
      title: "Wdrożył stronę profilu użytkownika",
      description: "Next.js + Tailwind, gotowe do recenzji mentora.",
      type: "deploy",
      date: "2026-06-19T09:40:00.000Z",
    },
    {
      id: "a2",
      title: "Ukończył zadanie „Zrób stronę TODO”",
      description: "Prosta aplikacja listy zadań w React.",
      type: "task",
      date: "2026-06-19T09:15:00.000Z",
    },
    {
      id: "a3",
      title: "Skomentował PR #42",
      description: "Sugestia refaktoru komponentu listy.",
      type: "comment",
      date: "2026-06-18T14:22:00.000Z",
    },
    {
      id: "a4",
      title: "Recenzja kodu kolegi z zespołu",
      description: "Przejrzał moduł autoryzacji, zatwierdził z drobnymi uwagami.",
      type: "review",
      date: "2026-06-17T11:05:00.000Z",
    },
    {
      id: "a5",
      title: "Push: 6 commitów do gałęzi feature/profile",
      description: "Komponenty Avatar, ActivityList oraz stylowanie.",
      type: "commit",
      date: "2026-06-16T16:48:00.000Z",
    },
  ],
};
