import React from 'react';
import { render } from 'react-dom';

export default function a () {
    render(<span />, document.createElement('div'));
}
