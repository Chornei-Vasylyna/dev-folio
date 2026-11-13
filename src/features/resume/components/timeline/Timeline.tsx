import { getItemOrganization, getItemTitle } from "../../lib/utils";
import type { TimelineProps } from "./Timeline.types";

export const Timeline = ({ items = [], title, icon: Icon }: TimelineProps) => {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
        {Icon && <Icon className="h-5 w-5 text-indigo-500" />}
        {title}
      </h2>
      <div className="relative space-y-6 border-l-2 border-indigo-100 pl-6">
        {items.map((item, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: no other options
          <div key={i} className="relative">
            <div className="absolute left-[-1.65rem] top-1.5 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-100" />
            <div>
              <h3 className="font-semibold text-foreground">
                {getItemTitle(item) || "—"}
              </h3>
              <p className="text-sm text-indigo-600">
                {getItemOrganization(item)}
                {item.period ? ` · ${item.period}` : ""}
              </p>
              {item.description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
