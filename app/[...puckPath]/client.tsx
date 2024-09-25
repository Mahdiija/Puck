

import type { Data } from "@measured/puck";
import { Render } from "@measured/puck/rsc";
import config from "../../puck.config";

export const Client = ({ data }: { data: Data }) =>  {
  return <Render config={config} data={data} />;
}
