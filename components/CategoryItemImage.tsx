import Image from 'next/image';
import React from 'react'

interface Props {
  src: string;
  name: string;
}

const CategoryItemImage = ({ src, name }: Props) => {
  return <Image src={src} alt={name} width={500} height={500} />
}

export default CategoryItemImage