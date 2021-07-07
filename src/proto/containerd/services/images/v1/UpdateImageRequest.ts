// Original file: proto/github.com/containerd/containerd/api/services/images/v1/images.proto

import type {
  Image as _containerd_services_images_v1_Image,
  Image__Output as _containerd_services_images_v1_Image__Output,
} from '../../../../containerd/services/images/v1/Image'
import type {
  FieldMask as _google_protobuf_FieldMask,
  FieldMask__Output as _google_protobuf_FieldMask__Output,
} from '../../../../google/protobuf/FieldMask'

export interface UpdateImageRequest {
  image?: _containerd_services_images_v1_Image | null
  updateMask?: _google_protobuf_FieldMask | null
}

export interface UpdateImageRequest__Output {
  image: _containerd_services_images_v1_Image__Output | null
  updateMask: _google_protobuf_FieldMask__Output | null
}
