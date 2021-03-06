// Original file: proto/github.com/containerd/containerd/api/services/images/v1/images.proto

import type {
  Image as _containerd_services_images_v1_Image,
  Image__Output as _containerd_services_images_v1_Image__Output,
} from '../../../../containerd/services/images/v1/Image'

export interface ListImagesResponse {
  images?: _containerd_services_images_v1_Image[]
}

export interface ListImagesResponse__Output {
  images: _containerd_services_images_v1_Image__Output[]
}
