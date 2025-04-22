
import React from "react";
import ControlSystemLayout from "@/components/control-system/ControlSystemLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Plus, Check } from "lucide-react";

const ProductSetup = () => {
  return (
    <ControlSystemLayout title="Product & Service Setup">
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">
          Configure your product offerings, plans, and pricing for different educational institutions.
        </p>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Create New Plan
        </Button>
      </div>
      
      <Tabs defaultValue="school">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="school">School Management</TabsTrigger>
          <TabsTrigger value="college">College Management</TabsTrigger>
          <TabsTrigger value="elearning">E-Learning</TabsTrigger>
        </TabsList>
        
        <TabsContent value="school">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Basic",
                price: "$299",
                billing: "per month",
                description: "Essential features for small schools",
                features: [
                  "Up to 500 students",
                  "Attendance Management",
                  "Grade Management",
                  "Basic Reporting",
                  "Email Support",
                ],
              },
              {
                title: "Standard",
                price: "$499",
                billing: "per month",
                description: "Comprehensive solution for growing schools",
                features: [
                  "Up to 1,500 students",
                  "All Basic features",
                  "Timetable Management",
                  "Parent Portal",
                  "Library Management",
                  "Fee Management",
                  "Priority Support",
                ],
                popular: true,
              },
              {
                title: "Premium",
                price: "$899",
                billing: "per month",
                description: "Advanced features for large institutions",
                features: [
                  "Unlimited students",
                  "All Standard features",
                  "Transport Management",
                  "Hostel Management",
                  "Advanced Analytics",
                  "Custom Reports",
                  "API Access",
                  "24/7 Phone Support",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={plan.popular ? "border-primary shadow-md" : ""}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-end mt-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.billing}</span>
                    </div>
                    <p className="mt-2">{plan.description}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="gap-1">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button>Configure</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="college">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Basic",
                price: "$499",
                billing: "per month",
                description: "Essential features for small colleges",
                features: [
                  "Up to 1,000 students",
                  "Course Management",
                  "Attendance Management",
                  "Grade Management",
                  "Basic Reporting",
                  "Email Support",
                ],
              },
              {
                title: "Standard",
                price: "$899",
                billing: "per month",
                description: "Comprehensive solution for mid-size colleges",
                features: [
                  "Up to 3,000 students",
                  "All Basic features",
                  "Faculty Management",
                  "Library Management",
                  "Student Portal",
                  "Fee Management",
                  "Alumni Management",
                  "Priority Support",
                ],
                popular: true,
              },
              {
                title: "Premium",
                price: "$1,499",
                billing: "per month",
                description: "Advanced features for large institutions",
                features: [
                  "Unlimited students",
                  "All Standard features",
                  "Research Management",
                  "Grant Management",
                  "Advanced Analytics",
                  "Integration APIs",
                  "Custom Development",
                  "24/7 Dedicated Support",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={plan.popular ? "border-primary shadow-md" : ""}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-end mt-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.billing}</span>
                    </div>
                    <p className="mt-2">{plan.description}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="gap-1">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button>Configure</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="elearning">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Basic",
                price: "$199",
                billing: "per month",
                description: "Essential e-learning features for small organizations",
                features: [
                  "Up to 500 users",
                  "Course Management",
                  "Basic Content Creation",
                  "Assessment Tools",
                  "Basic Reporting",
                  "Email Support",
                ],
              },
              {
                title: "Standard",
                price: "$399",
                billing: "per month",
                description: "Comprehensive e-learning solution for growing organizations",
                features: [
                  "Up to 2,000 users",
                  "All Basic features",
                  "Advanced Content Creation",
                  "Gamification",
                  "Discussion Forums",
                  "Learning Paths",
                  "Certificate Generation",
                  "Priority Support",
                ],
                popular: true,
              },
              {
                title: "Premium",
                price: "$799",
                billing: "per month",
                description: "Advanced e-learning platform for large institutions",
                features: [
                  "Unlimited users",
                  "All Standard features",
                  "Virtual Classrooms",
                  "Mobile Learning Apps",
                  "Advanced Analytics",
                  "Personalized Learning",
                  "API Access",
                  "White Labeling",
                  "24/7 Dedicated Support",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={plan.popular ? "border-primary shadow-md" : ""}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-end mt-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.billing}</span>
                    </div>
                    <p className="mt-2">{plan.description}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="gap-1">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button>Configure</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </ControlSystemLayout>
  );
};

export default ProductSetup;
