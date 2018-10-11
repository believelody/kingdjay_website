import React from 'react';
import { Item } from 'semantic-ui-react';

const ToolItem = ({tool}) => <Item image={tool.fields.file.url} header={tool.fields.title} description={tool.fields.description} />

export default ToolItem;
