import { ResponsiveNetwork } from "@nivo/network";
import { match } from "ts-pattern";

const tables = [
  {
    type: "table",
    subType: "coreModel",
    title: "Data Sets",
    fields: [
      {
        id: "primaryKey",
        type: "primaryKey",
        title: "Dataset 1 - PK",
      },
      {
        type: "foreignKey",
        title: "Timestamp",
        tableId: "Timestamp Labels",
      },
      {
        type: "node",
        title: "Value",
      },
    ],
  },
  {
    type: "table",
    subType: "auxillaryModel",
    title: "Timestamp Labels",
    fields: [
      { id: "primaryKey", type: "primaryKey", title: "Timestamp Labels - PK" },
      {
        type: "node",
        title: "Timestamp - ISO",
      },
      {
        type: "node",
        title: "Timestamp - Date (Readable)",
      },
      {
        type: "node",
        title: "Timestamp - Date Time (Readable)",
      },
      {
        type: "node",
        title: "Timestamp - DD/MM/YYYY",
      },
    ],
  },
] as const;

/**
 *
 * Flattens shape above into consumable shape
 * - tables become root nodes, can be referrenced by foreignKeys
 * - table fields become nodes, can be terminal nodes or references to other tables
 * - foreignKeys become links between tables, where the value is a reference to a primary key in another table
 */

//TODO: Turn into function
const networkData = tables.reduce(
  (acc, table) => {
    let nodes = [...acc.nodes];
    let links = [...acc.links];

    //Consume table objects + create nodes + links for declared fields
    if (table.type === "table") {
      const color = match(table.subType)
        .with("coreModel", () => "red")
        .with("auxillaryModel", () => "orange")
        .exhaustive();

      nodes.push({
        id: table.title,
        height: 1,
        size: 24,
        color: color,
      });

      table.fields.forEach((field) => {
        //Pass link to table node
        const color = match(field.type)
          .with("primaryKey", () => "purple")
          .with("foreignKey", () => "blue")
          .with("node", () => "blue")
          .exhaustive();

        //Add self as node
        nodes.push({
          id: field.title,
          height: 1,
          size: 24,
          color: color,
        });

        //Link self to table
        links.push({
          source: table.title,
          target: field.title,
          distance: 100,
        });

        //Link self to referenced table if is foreign key to another table
        if (field.type === "foreignKey") {
          const targetTableForeignId = tables
            .find((table) => table.title === field.tableId)
            ?.fields.find((field) => field.type === "primaryKey")?.title;

          targetTableForeignId
            ? //Add link to target table primary key
              links.push({
                target: targetTableForeignId,
                source: field.title,
                distance: 200,
              })
            : //Fallback link to table
              links.push({
                target: field.title,
                source: field.tableId,
                distance: 200,
              });
        }
      });
    }

    return {
      nodes,
      links,
    };
  },
  {
    nodes: [],
    links: [],
  } as {
    nodes: any[]; //TODO: Define node type
    links: any[]; //TODO: Define link type
  }
);

export const MyResponsiveNetwork = ({}) => {
  return (
    <div style={{ height: "100vh" }}>
      <ResponsiveNetwork
        data={networkData}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={(e) => e.distance}
        centeringStrength={1}
        repulsivity={100}
        nodeSize={(n) => n.size}
        activeNodeSize={(n) => 1.2 * n.size}
        nodeColor={(e) => e.color}
        nodeBorderWidth={1}
        nodeBorderColor={{
          from: "color",
          modifiers: [["darker", 0.8]],
        }}
        linkThickness={(n) => 2 + 2 * n.target.data.height}
        linkBlendMode="multiply"
        motionConfig="wobbly"
      />
    </div>
  );
};
