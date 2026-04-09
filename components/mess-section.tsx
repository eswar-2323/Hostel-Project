"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Sun, Sunset, Moon } from "lucide-react";

/* TYPES */
type MenuType = {
  today: {
    breakfast: string[];
    lunch: string[];
    snacks: string[];
    dinner: string[];
  };
};

/* Meal Card */
const MealCard = ({
  icon: Icon,
  title,
  items,
  variant,
}: {
  icon: typeof Coffee;
  title: string;
  items: string[];
  variant: "morning" | "noon" | "evening" | "night";
}) => {
  const colors = {
    morning: "bg-amber-500/10 text-amber-600",
    noon: "bg-orange-500/10 text-orange-600",
    evening: "bg-rose-500/10 text-rose-600",
    night: "bg-indigo-500/10 text-indigo-600",
  };

  return (
    <div className="bg-muted/50 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center ${colors[variant]}`}
        >
          <Icon className="h-4 w-4" />
        </div>
        <span className="font-medium text-foreground">{title}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.length > 0 ? (
          items.map((item, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs font-normal">
              {item}
            </Badge>
          ))
        ) : (
          <span className="text-sm text-muted-foreground">
            Not updated yet
          </span>
        )}
      </div>
    </div>
  );
};

/* MAIN COMPONENT */
export function MessSection() {
  const [menu, setMenu] = useState<MenuType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load menu");
        setLoading(false);
      });
  }, []);

  return (
    <section id="mess" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Daily Menu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Mess Updates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Fresh and healthy meals served daily.
          </p>
        </div>

        {/* Card */}
        <Card className="max-w-4xl mx-auto border-border/50">
          <CardHeader>
            <CardTitle>Today's Menu</CardTitle>
          </CardHeader>

          <CardContent>
            {loading ? (
              <p className="text-center text-muted-foreground">
                Loading menu...
              </p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <MealCard
                  icon={Coffee}
                  title="Breakfast"
                  items={menu?.today?.breakfast || []}
                  variant="morning"
                />

                <MealCard
                  icon={Sun}
                  title="Lunch"
                  items={menu?.today?.lunch || []}
                  variant="noon"
                />

                <MealCard
                  icon={Sunset}
                  title="Snacks"
                  items={menu?.today?.snacks || []}
                  variant="evening"
                />

                <MealCard
                  icon={Moon}
                  title="Dinner"
                  items={menu?.today?.dinner || []}
                  variant="night"
                />

              </div>
            )}
          </CardContent>
        </Card>

      </div>
    </section>
  );
}