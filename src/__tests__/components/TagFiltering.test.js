import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TagFiltering from '../../components/TagFiltering';

describe('TagFiltering Component', () => {
  it('renders tags and selects a tag on click', () => {
    const onSelectTagMock = jest.fn();
    const tags = ['React', 'JavaScript', 'CSS'];
    render(<TagFiltering tags={tags} onSelectTag={onSelectTagMock} />);
    
    const reactTagButton = screen.getByText('React');
    fireEvent.click(reactTagButton);
    
    expect(onSelectTagMock).toHaveBeenCalledWith('React');
  });
});
