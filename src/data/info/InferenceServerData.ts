import { InferenceServerType } from "../enums/InferenceServerType";

export interface IInferenceServer {
  name: string;
  imageSrc: string;
  imageAlt: string;
  isDisabled: boolean;
}

export const InferenceServerDataMap: Record<
  InferenceServerType,
  IInferenceServer
> = {
  [InferenceServerType.ROBOFLOW]: {
    name: "Roboflow Inference Server",
    imageSrc: "ico/roboflow-logo.png",
    imageAlt: "roboflow-inference-server",
    isDisabled: false,
  },
  [InferenceServerType.MAKESENSE]: {
    name: "RFS Inference Server",
    imageSrc: "ico/rfs-logo-white.png",
    imageAlt: "rfs-inference-server",
    isDisabled: true,
  },
};

