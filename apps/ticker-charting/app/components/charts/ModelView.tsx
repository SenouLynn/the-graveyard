import { ResponsiveNetwork } from "@nivo/network";
import { match } from "ts-pattern";

const tables = [
  {
    type: "table",
    subType: "coreModel",
    title: "Assets",
    fields: [
      {
        type: "primaryKey",
        title: "Asset - PK",
      },
      {
        type: "foreignKey",
        title: "Asset - Custom ID",
        tableId: "Custom ID Table",
      },

      {
        type: "foreignKey",
        title: "Ticker Price",
        tableId: "Ticker Price",
      },
    ],
  },

  {
    type: "table",
    title: "Ticker Price",
    subType: "auxillaryModel",
    fields: [
      {
        type: "primaryKey",
        title: "Ticker - PK",
      },
      {
        type: "node",
        title: "Ticker - Current Value",
      },
      {
        type: "node",
        title: "Ticker - 52 Week High",
      },
      {
        type: "node",
        title: "Ticker - 52 Week Low",
      },
      {
        type: "node",
        title: "Ticker - Market Cap",
      },
      {
        type: "node",
        title: "Ticker - Volume",
      },
      {
        type: "node",
        title: "Last Updated",
      },
    ],
  },
  {
    type: "table",
    title: "Info",
    subType: "auxillaryModel",
    fields: [
      {
        type: "primaryKey",
        title: "Info - PK",
      },
      {
        type: "node",
        title: "Info - First Name",
      },
      {
        type: "node",
        title: "Info - Last Name",
      },
      {
        type: "node",
        title: "Common Name",
      },
      {
        type: "node",
        title: "Abbreviation",
      },
    ],
  },

  {
    type: "table",
    subType: "auxillaryModel",
    title: "Custom ID Table",
    fields: [
      {
        type: "primaryKey",
        title: "Custom ID - PK",
      },
      {
        type: "node",
        title: "Custom ID",
      },
    ],
  },
  {
    type: "table",
    subType: "coreModel",
    title: "Transactions",
    fields: [
      {
        type: "primaryKey",
        title: "Transaction - PK",
      },
      {
        type: "foreignKey",
        title: "Transaction - Asset",
        tableId: "Assets",
      },
      {
        type: "foreignKey",
        title: "Transaction - Info",
        tableId: "Info",
      },
      {
        type: "foreignKey",
        title: "Transaction - Custom ID",
        tableId: "Custom ID Table",
      },
      {
        type: "node",
        title: "Transaction - Quantity",
      },
      {
        type: "node",
        title: "Transaction - Price",
      },
      {
        type: "node",
        title: "Transaction - Value",
      },
      {
        type: "node",
        title: "Transaction - Date",
      },
    ],
  },
  {
    type: "table",
    subType: "auxillaryModel",
    title: "Price History",
    fields: [
      {
        type: "primaryKey",
        title: "Price History - PK",
      },
      {
        type: "foreignKey",
        title: "Price History - Asset",
        tableId: "Assets",
      },
      {
        type: "foreignKey",
        title: "Executor",
        tableId: "User",
      },
      {
        type: "node",
        title: "Price History - Date",
      },
      {
        type: "node",
        title: "Price History - Price",
      },
    ],
  },
  {
    type: "table",
    subType: "coreModel",
    title: "User",
    fields: [
      {
        type: "primaryKey",
        title: "User - PK",
      },
      {
        type: "foreignKey",
        title: "User - Info",
        tableId: "Info",
      },
      {
        type: "foreignKey",
        title: "User - Custom ID",
        tableId: "Custom ID Table",
      },
      {
        type: "foreignKey",
        title: "User - Contact",
        tableId: "Contact",
      },
      {
        type: "foreignKey",
        title: "User - Address",
        tableId: "Address",
      },
    ],
  },
  {
    type: "table",
    subType: "auxillaryModel",
    title: "Contact",
    fields: [
      {
        type: "primaryKey",
        title: "Contact - PK",
      },
      {
        type: "node",
        title: "Contact - Email",
      },
      {
        type: "node",
        title: "Contact - Phone",
      },
    ],
  },
  {
    type: "table",
    subType: "auxillaryModel",
    title: "Address",
    fields: [
      {
        type: "primaryKey",
        title: "Address - PK",
      },
      {
        type: "node",
        title: "Address - Street",
      },
      {
        type: "node",
        title: "Address - City",
      },
      {
        type: "node",
        title: "Address - State",
      },
      {
        type: "node",
        title: "Address - Zip",
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

const networkData = tables.reduce(
  (acc, table) => {
    let fields = [...acc.nodes];
    let links = [...acc.links];

    if (table.type === "table") {
      const color = match(table.subType)
        .with("coreModel", () => "red")
        .with("auxillaryModel", () => "orange")
        .exhaustive();

      fields.push({
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
        if (field.type === "primaryKey") {
          fields.push({
            id: field.title,
            height: 1,
            size: 24,
            color: color,
          });
          links.push({
            source: table.title,
            target: field.title,
            distance: 100,
          });
        }
        if (field.type === "foreignKey") {
          links.push({
            source: field.tableId,
            target: table.title,
            distance: 200,
          });
        }
        if (field.type === "node") {
          fields.push({
            id: field.title,
            height: 1,
            size: 24,
            color: color,
          });
          links.push({
            source: field.title,
            target: table.title,
            distance: 80,
          });
        }
      });
    }

    return {
      nodes: fields,
      links: links,
    };
  },
  {
    nodes: [],
    links: [],
  } as {
    nodes: any[];
    links: any[];
  }
);

export const MyResponsiveNetwork = ({}) => (
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
