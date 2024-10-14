import SingularStoryContent from "@/components/stories/SingularStoryContent";
import React from "react";

export default function SingularStory({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div>
      <SingularStoryContent id={params.id} />
    </div>
  );
}
