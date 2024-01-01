'use client';
import { useState } from 'react';
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
} from 'react-circular-input';

export default function DevicePage() {
  const [value, setValue] = useState(0.25);
  return (
    <CircularInput value={value} onChange={setValue}>
      <CircularTrack strokeWidth={6} />
      <CircularProgress strokeWidth={6} />
      <CircularThumb r={10} />
    </CircularInput>
  );
}
