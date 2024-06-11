"use client";
const { Button } = require("./ui/button");
import { toast } from "sonner";

const Test = () => {
  return (
    <Button
      variant="link"
      onClick={() => toast.info("Event has been created.")}
    >
      Link
    </Button>
  );
};

export default Test;
