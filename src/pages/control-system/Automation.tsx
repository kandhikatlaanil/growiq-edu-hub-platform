
import React from "react";
import ControlSystemLayout from "@/components/control-system/ControlSystemLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, FileText, RotateCw, AlertTriangle, Check, X } from "lucide-react";

const Automation = () => {
  return (
    <ControlSystemLayout title="Automation">
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">
          Manage automated service workflows like provisioning, suspension, and termination.
        </p>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          New Workflow
        </Button>
      </div>
      
      <Tabs defaultValue="workflows">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="workflows">Active Workflows</TabsTrigger>
          <TabsTrigger value="history">Execution History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="workflows">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "New Client Onboarding",
                description: "Automatically provision services for new clients",
                status: "Active",
                lastRun: "Apr 18, 2025 - 10:32 AM",
                nextRun: "On new client creation",
                steps: ["Create client account", "Setup initial service", "Send welcome email"],
              },
              {
                title: "Payment Failed Suspension",
                description: "Suspend services after failed payment attempts",
                status: "Active",
                lastRun: "Apr 16, 2025 - 03:14 PM",
                nextRun: "On payment failure (after 3 attempts)",
                steps: ["Flag account", "Send warning email", "Suspend service after 48 hours"],
              },
              {
                title: "Subscription Renewal",
                description: "Process subscription renewals automatically",
                status: "Active",
                lastRun: "Apr 15, 2025 - 11:00 PM",
                nextRun: "Apr 22, 2025 - 11:00 PM",
                steps: ["Check expiring subscriptions", "Process payments", "Extend service periods"],
              },
              {
                title: "Account Termination",
                description: "Clean up after account termination",
                status: "Active",
                lastRun: "Apr 10, 2025 - 09:45 AM",
                nextRun: "On termination request",
                steps: ["Archive user data", "Terminate services", "Send confirmation email"],
              },
            ].map((workflow, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-start justify-between pb-2">
                  <div>
                    <CardTitle>{workflow.title}</CardTitle>
                    <CardDescription>{workflow.description}</CardDescription>
                  </div>
                  <Switch checked={workflow.status === "Active"} />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 text-sm">
                      <span className="text-muted-foreground">Last execution:</span>
                      <span>{workflow.lastRun}</span>
                    </div>
                    <div className="grid grid-cols-2 text-sm">
                      <span className="text-muted-foreground">Next execution:</span>
                      <span>{workflow.nextRun}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-medium mb-2">Workflow Steps:</p>
                      <ol className="list-decimal list-inside text-sm space-y-1">
                        {workflow.steps.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="gap-1">
                    <FileText className="h-4 w-4" />
                    Logs
                  </Button>
                  <Button className="gap-1">
                    <RotateCw className="h-4 w-4" />
                    Run Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Workflow Execution History</CardTitle>
              <CardDescription>
                Recent execution history of your automated workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Workflow</TableHead>
                    <TableHead>Execution Time</TableHead>
                    <TableHead>Trigger</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { workflow: "New Client Onboarding", time: "Apr 18, 2025 - 10:32 AM", trigger: "New client registration", status: "Success", duration: "45s" },
                    { workflow: "Subscription Renewal", time: "Apr 15, 2025 - 11:00 PM", trigger: "Scheduled", status: "Success", duration: "3m 12s" },
                    { workflow: "Payment Failed Suspension", time: "Apr 14, 2025 - 03:14 PM", trigger: "Payment failure", status: "Warning", duration: "1m 5s" },
                    { workflow: "Account Termination", time: "Apr 10, 2025 - 09:45 AM", trigger: "User requested", status: "Success", duration: "1m 23s" },
                    { workflow: "New Client Onboarding", time: "Apr 08, 2025 - 02:19 PM", trigger: "New client registration", status: "Failed", duration: "32s" },
                    { workflow: "Subscription Renewal", time: "Apr 08, 2025 - 11:00 PM", trigger: "Scheduled", status: "Success", duration: "2m 55s" },
                  ].map((execution, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{execution.workflow}</TableCell>
                      <TableCell>{execution.time}</TableCell>
                      <TableCell>{execution.trigger}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                          execution.status === "Success" 
                            ? "bg-green-100 text-green-800" 
                            : execution.status === "Failed" 
                              ? "bg-red-100 text-red-800" 
                              : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {execution.status === "Success" && <Check className="h-3 w-3 mr-1" />}
                          {execution.status === "Failed" && <X className="h-3 w-3 mr-1" />}
                          {execution.status === "Warning" && <AlertTriangle className="h-3 w-3 mr-1" />}
                          {execution.status}
                        </span>
                      </TableCell>
                      <TableCell>{execution.duration}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Automation Settings</CardTitle>
              <CardDescription>
                Configure global settings for all automated workflows
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Enable All Workflows</h4>
                  <p className="text-sm text-muted-foreground">
                    Master switch to enable or disable all automated workflows
                  </p>
                </div>
                <Switch checked={true} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Notification on Failure</h4>
                  <p className="text-sm text-muted-foreground">
                    Send admin notification when a workflow fails
                  </p>
                </div>
                <Switch checked={true} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Retry Failed Workflows</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatically retry workflows that fail
                  </p>
                </div>
                <Switch checked={true} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Service Provisioning Delay</h4>
                  <p className="text-sm text-muted-foreground">
                    Wait for payment confirmation before provisioning
                  </p>
                </div>
                <Switch checked={false} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Extended Logging</h4>
                  <p className="text-sm text-muted-foreground">
                    Enable detailed logging for all workflow executions
                  </p>
                </div>
                <Switch checked={true} />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </ControlSystemLayout>
  );
};

export default Automation;
