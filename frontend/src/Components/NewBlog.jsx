import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    div {
        background-color: white;
    }
`;

class NewBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange(editorState) {
        this.setState({
            editorState,
        });
    }

    render() {
        const { editorState } = this.state;
        return (
            <Wrapper>
                <div className='container'>
                    <div className='row-cols-1'>
                        <div className='col'>
                            <p className='font-italic font-weight-bold text-capitalize text-left mb-0 Display-2'>
                                New Blog
                            </p>
                        </div>
                        <div className='col'>
                            <Editor
                                editorState={editorState}
                                wrapperClassName='demo-wrapper'
                                editorClassName='demo-editor'
                                onEditorStateChange={this.onEditorStateChange}
                            />
                            <textarea
                                disabled
                                value={draftToHtml(
                                    convertToRaw(
                                        editorState.getCurrentContent(),
                                    ),
                                )}
                            />
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}
export default NewBlog;
