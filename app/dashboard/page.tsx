"use client";

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";

export default function Dashboard() {
  const [webCopy, setWebCopy] = useState('');
  const [imagePrompt, setImagePrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const { toast } = useToast();

  const generateWebCopy = async () => {
    // TODO: Implement web copy generation using AI
    toast({
      title: "Web Copy Generated",
      description: "Your web copy has been generated successfully.",
    });
  };

  const generateImage = async () => {
    // TODO: Implement image generation using AI
    setGeneratedImage('https://example.com/generated-image.jpg');
    toast({
      title: "Image Generated",
      description: "Your image has been generated successfully.",
    });
  };

  const editImage = async () => {
    // TODO: Implement image editing using AI
    toast({
      title: "Image Edited",
      description: "Your image has been edited successfully.",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI Dashboard</h1>
      <Tabs defaultValue="webcopy">
        <TabsList>
          <TabsTrigger value="webcopy">Web Copy</TabsTrigger>
          <TabsTrigger value="imagecreation">Image Creation</TabsTrigger>
          <TabsTrigger value="imageediting">Image Editing</TabsTrigger>
        </TabsList>
        <TabsContent value="webcopy">
          <Textarea
            placeholder="Enter your web copy prompt here"
            value={webCopy}
            onChange={(e) => setWebCopy(e.target.value)}
            className="mb-4"
          />
          <Button onClick={generateWebCopy}>Generate Web Copy</Button>
        </TabsContent>
        <TabsContent value="imagecreation">
          <Input
            placeholder="Enter your image prompt here"
            value={imagePrompt}
            onChange={(e) => setImagePrompt(e.target.value)}
            className="mb-4"
          />
          <Button onClick={generateImage}>Generate Image</Button>
          {generatedImage && (
            <img src={generatedImage} alt="Generated" className="mt-4 max-w-full h-auto" />
          )}
        </TabsContent>
        <TabsContent value="imageediting">
          <Input
            type="file"
            accept="image/*"
            className="mb-4"
          />
          <Button onClick={editImage}>Edit Image</Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}