import React, { useState } from 'react';

import classes from './Upload.module.scss';

const Upload = () => {
  const [files, setFiles] = useState<string[]>([]);

  const handleChange = (file: FileList | null) => {
    if (!file?.length) {
      return;
    }
    const newState = [...files];
    newState.push(URL.createObjectURL(file[0]));
    setFiles(newState);
  };

  return (
    <div className={classes.upload}>
      <div className={classes.header}>
        <label htmlFor=''>Įkelti nuotrauką</label>
        <input
          type='file'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.files)
          }
        />
      </div>
      <div>
        {files.map((img, i) => {
          console.log(img);
          return (
            <div className={classes.imagesContainer} key={i}>
              <img className={classes.image} src={img} alt='' />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Upload;
