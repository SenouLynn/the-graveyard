const ContactModel = {
  type: "auxillaryModel",
  title: "Contact",
  fields: [
    {
      type: "id",
      nodeId: "Contact - PK",
      layoutId: "contactPK",
    },
    {
      type: "node",
      nodeId: "Contact - Email",
      layoutId: "contactEmail",
    },
    {
      type: "node",
      nodeId: "Contact - Phone",
      layoutId: "contactPhone",
    },
  ],
} satisfies ModelDef;

const InfoModel = {
  type: "auxillaryModel",
  title: "Info",
  fields: [
    {
      type: "id",
      nodeId: "Info - PK",
      layoutId: "infoPK",
    },
    {
      type: "node",
      nodeId: "Info - Name",
      layoutId: "infoName",
    },
    {
      type: "node",
      nodeId: "Info - Age",
      layoutId: "infoAge",
    },
  ],
} satisfies ModelDef;

const UserModel = {
  type: "coreModel",
  title: "User",
  fields: [
    {
      type: "id",
      nodeId: "User - PK",
      layoutId: "userPK",
    },
    {
      type: "link",
      nodeId: "User - Info",
      linkId: "Info",
      layoutId: "userInfo",
    },
    {
      type: "link",
      nodeId: "User - Custom ID",
      linkId: "Custom ID Table",
      layoutId: "userCustomID",
    },
    {
      type: "link",
      nodeId: "User - Contact",
      linkId: "Contact",
      layoutId: "userContact",
    },
    {
      type: "link",
      nodeId: "User - Address",
      linkId: "Address",
      layoutId: "userAddress",
    },
  ],
} satisfies ModelDef;

type FieldDef =
  | {
      type: "id" | "node" | "link";
      nodeId: string;
      layoutId: string;
    }
  | {
      type: "link";
      title: string;
      linkId: string;
    };
type ModelDef = {
  type: "coreModel" | "auxillaryModel";
  title: string;
  fields: FieldDef[];
};
