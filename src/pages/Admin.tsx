import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, FileText, Image, Type } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminPublications from "@/components/admin/AdminPublications";
import AdminImages from "@/components/admin/AdminImages";
import AdminTexts from "@/components/admin/AdminTexts";

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("publications");

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au site
              </Button>
              <div className="h-6 w-px bg-border" />
              <h1 className="font-display font-semibold text-lg">
                <span className="text-primary">Dashboard</span> Administrateur
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="publications" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Publications</span>
            </TabsTrigger>
            <TabsTrigger value="images" className="gap-2">
              <Image className="w-4 h-4" />
              <span className="hidden sm:inline">Images</span>
            </TabsTrigger>
            <TabsTrigger value="textes" className="gap-2">
              <Type className="w-4 h-4" />
              <span className="hidden sm:inline">Textes</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="publications">
            <AdminPublications />
          </TabsContent>

          <TabsContent value="images">
            <AdminImages />
          </TabsContent>

          <TabsContent value="textes">
            <AdminTexts />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
