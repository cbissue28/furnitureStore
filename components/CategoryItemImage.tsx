import Image from 'next/image';
import React from 'react'

interface Props {
  src: string;
  name: string;
}

// Returns image of product for category item container.
const CategoryItemImage = ({ src, name }: Props) => {
  return <Image src={src} alt={name} width={500} height={500} />
}

export default CategoryItemImage