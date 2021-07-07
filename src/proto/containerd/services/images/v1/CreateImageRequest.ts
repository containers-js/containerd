// Original file: proto/github.com/containerd/containerd/api/services/images/v1/images.proto

import type {
  Image as _containerd_services_images_v1_Image,
  Image__Output as _containerd_services_images_v1_Image__Output,
} from '../../../../containerd/services/images/v1/Image'

export interface CreateImageRequest {
  image?: _containerd_services_images_v1_Image | null
}

export interface CreateImageRequest__Output {
  image: _containerd_services_images_v1_Image__Output | null
}
