import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {

  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';

  return (
    <>
      {isLoading && (
        <Box style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          backgroundImage: isItSecondVersion ? 'url(images/loader-newtalley.jpg)' : 'url(images/preload_image.jpg)',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      )}
    </>

  );
};

export default Loader;
