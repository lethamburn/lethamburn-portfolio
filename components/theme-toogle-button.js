import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorModeValue('white', 'black')}
      icon={useColorModeValue(<Image src="/images/footprint-dark.png" height={23} width={23} />, <Image src="/images/footprint.png" height={23} width={23} />)}
      onClick={toggleColorMode}
    ></IconButton>
  )
}

export default ThemeToggleButton
