import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import documentService from "../appwrite/config";
import { Container, PostForm } from "../components";

function EditPost() {
  const navigate = useNavigate();
  const [post, setPosts] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      documentService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-2">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
