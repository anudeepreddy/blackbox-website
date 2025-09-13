"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Play, Eye, Network, Terminal, Github, Chrome, ArrowRight, CheckCircle } from "lucide-react"
import { BlackboxIcon } from "@/components/blackbox-icon"

export default function BlackboxLandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4 lg:space-x-8">
              <div className="flex items-center space-x-2">
                <BlackboxIcon size={32} />
                <span className="text-xl font-bold">Blackbox</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex border-orange-500/20 text-orange-600 hover:bg-orange-500/10 hover:text-orange-700 hover:border-orange-500/30 dark:text-orange-400 dark:hover:text-orange-300 dark:hover:bg-orange-500/10 transition-colors"
                onClick={() => window.open("https://github.com/anudeepreddy/blackbox", "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full relative z-10">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-cyan-500/5"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge
                variant="secondary"
                className="mb-6 bg-orange-500/10 text-orange-800 dark:text-orange-200 border-orange-500/20 shadow-lg backdrop-blur-sm"
              >
                <Play className="mr-1 h-3 w-3" />
                Record • Replay • Debug
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-balance">
                <span className="text-orange-600 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Blackbox
                </span>
                <br />
                Powerful session recording for web debugging
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                Capture user interactions, console logs, and network requests seamlessly. Export sessions as JSON and
                replay them for comprehensive debugging and QA analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200"
                  onClick={() => window.open("https://github.com/anudeepreddy/blackbox/releases/latest", "_blank")}
                >
                  <Chrome className="mr-2 h-5 w-5" />
                  Download Extension
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">See Blackbox in Action</h2>
              <p className="text-muted-foreground">Watch how easy it is to record and replay user sessions</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl ring-1 ring-orange-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-cyan-500/20 rounded-lg blur-sm"></div>
                <iframe
                  src="https://www.loom.com/embed/584ea05284b246cda642cf77d4953579?sid=dd8af95b-976f-4024-be7a-e843b00afa7f&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full relative z-10 rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 sm:py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_50%)]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Everything You Need for Session Analysis
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive recording capabilities designed for developers, QA engineers, and UX analysts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg hover:shadow-orange-500/10 transition-all border-orange-500/20 bg-gradient-to-br from-background to-orange-500/5">
                <CardHeader>
                  <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle>User Interaction Recording</CardTitle>
                  <CardDescription>
                    Captures every click, type, scroll, and user event with pixel-perfect accuracy for complete session
                    reconstruction.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg hover:shadow-cyan-500/10 transition-all border-cyan-500/20 bg-gradient-to-br from-background to-cyan-500/5">
                <CardHeader>
                  <div className="h-12 w-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Terminal className="h-6 w-6 text-cyan-500" />
                  </div>
                  <CardTitle>Console Logs & Errors</CardTitle>
                  <CardDescription>
                    Records JavaScript console output, errors, and warnings during sessions for comprehensive runtime
                    debugging.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg hover:shadow-green-500/10 transition-all border-green-500/20 bg-gradient-to-br from-background to-green-500/5">
                <CardHeader>
                  <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Network className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle>Network Request Tracking</CardTitle>
                  <CardDescription>
                    Monitors all HTTP requests, responses, and API calls to identify performance bottlenecks and
                    failures.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-12 sm:py-20 bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" fill="none">
              <path
                d="M0,500 Q250,300 500,500 T1000,500"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
              <path
                d="M0,300 Q250,100 500,300 T1000,300"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                opacity="0.2"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(249 115 22)" stopOpacity="0" />
                  <stop offset="50%" stopColor="rgb(249 115 22)" stopOpacity="1" />
                  <stop offset="100%" stopColor="rgb(239 68 68)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(6 182 212)" stopOpacity="0" />
                  <stop offset="50%" stopColor="rgb(6 182 212)" stopOpacity="1" />
                  <stop offset="100%" stopColor="rgb(34 197 94)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Simple 3-Step Process</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Start recording, interact with your application, and replay sessions instantly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/25">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Start Recording</h3>
                <p className="text-muted-foreground">
                  Click the Blackbox extension icon and begin capturing your session with one click.
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Interact & Browse</h3>
                <p className="text-muted-foreground">
                  Use your application normally. All interactions, logs, and network requests are tracked automatically.
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Replay & Debug</h3>
                <p className="text-muted-foreground">
                  Stop recording and instantly replay the session. Export as JSON for sharing with your team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="installation" className="py-8 sm:py-12 lg:py-20 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_50%,transparent_65%)] bg-[length:20px_20px] animate-pulse"></div>
          </div>
          <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4">Installation Options</h2>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-2">
                  Choose your preferred installation method and get started in minutes.
                </p>
              </div>

              <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
                {/* Option 1: Download from Releases */}
                <Card className="border-orange-500/20 bg-gradient-to-br from-background via-background to-orange-500/5 shadow-xl">
                  <CardHeader className="pb-3 sm:pb-6">
                    <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
                      <CardTitle className="flex items-center text-base sm:text-lg lg:text-xl">
                        <Chrome className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-orange-500 flex-shrink-0" />
                        <span className="break-words">Download Pre-built Extension</span>
                      </CardTitle>
                      <Badge className="bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20 text-xs self-start sm:self-center">
                        Recommended
                      </Badge>
                    </div>
                    <CardDescription className="text-xs sm:text-sm">
                      Download the latest pre-built extension package from GitHub releases.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 pt-0">
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-semibold flex items-center text-xs sm:text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0" />
                        Quick Setup Steps
                      </h4>
                      <ol className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground list-decimal list-inside ml-4 sm:ml-6">
                        <li className="break-words">Download the latest release ZIP file</li>
                        <li className="break-words">Extract the ZIP to a folder on your computer</li>
                        <li className="break-words">Open <span className="font-mono text-xs bg-muted px-1 rounded">chrome://extensions/</span> in Chrome</li>
                        <li className="break-words">Enable "Developer mode" toggle</li>
                        <li className="break-words">Click "Load unpacked" and select the extracted folder</li>
                      </ol>
                    </div>
                    
                    <Button
                      className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 text-sm sm:text-base"
                      onClick={() => window.open("https://github.com/anudeepreddy/blackbox/releases/latest", "_blank")}
                    >
                      <Chrome className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Download Latest Release
                    </Button>
                  </CardContent>
                </Card>

                {/* Option 2: Build from Source */}
                <Card className="border-cyan-500/20 bg-gradient-to-br from-background via-background to-cyan-500/5 shadow-xl">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center text-base sm:text-lg lg:text-xl">
                      <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-cyan-500 flex-shrink-0" />
                      Build from Source
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Clone the repository and build the extension yourself for development.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 pt-0">
                    <div className="bg-muted rounded-lg p-2 sm:p-3 lg:p-4 font-mono text-xs overflow-x-auto">
                      <div className="text-muted-foreground mb-2"># Clone and build</div>
                      <div className="whitespace-nowrap text-xs">git clone https://github.com/anudeepreddy/blackbox.git</div>
                      <div className="text-xs">cd blackbox</div>
                      <div className="text-xs">npm install</div>
                      <div className="text-xs">npm run build</div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-semibold flex items-center text-xs sm:text-sm">
                        <CheckCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-cyan-500 flex-shrink-0" />
                        Chrome Setup
                      </h4>
                      <ol className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground list-decimal list-inside ml-4 sm:ml-6">
                        <li className="break-words">Open <span className="font-mono text-xs bg-muted px-1 rounded">chrome://extensions/</span> in Chrome</li>
                        <li className="break-words">Enable "Developer mode" toggle</li>
                        <li className="break-words">Click "Load unpacked" extension</li>
                        <li className="break-words">Select the <code className="bg-muted px-1 rounded text-xs">.output/chrome-mv3</code> folder</li>
                      </ol>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-3 sm:mt-4 border-cyan-500/20 text-cyan-600 hover:bg-cyan-500/10 hover:text-cyan-700 hover:border-cyan-500/30 dark:text-cyan-400 dark:hover:text-cyan-300 dark:hover:bg-cyan-500/10 transition-colors text-sm sm:text-base"
                      onClick={() => window.open("https://github.com/anudeepreddy/blackbox", "_blank")}
                    >
                      <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Common Next Steps */}
              <Card className="mt-6 sm:mt-8 border-green-500/20 bg-gradient-to-br from-background via-background to-green-500/5">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="flex items-center text-base sm:text-lg">
                    <CheckCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    After Installation
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Once installed, here's how to start using Blackbox</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 lg:gap-6">
                    <div className="text-center">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="text-lg sm:text-xl font-bold text-green-600">1</span>
                      </div>
                      <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Find the Extension</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Look for the Blackbox icon in your Chrome toolbar</p>
                    </div>
                    <div className="text-center">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="text-lg sm:text-xl font-bold text-green-600">2</span>
                      </div>
                      <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Start Recording</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Click the icon and hit "Start Recording" on any webpage</p>
                    </div>
                    <div className="text-center">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="text-lg sm:text-xl font-bold text-green-600">3</span>
                      </div>
                      <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Replay & Debug</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Stop recording and instantly replay your session</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-r from-muted/30 via-muted/60 to-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.1),transparent_70%)]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Ready to Debug Like a Pro?</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Be among the first to experience powerful session recording and debugging with Blackbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200"
                  onClick={() => window.open("https://github.com/anudeepreddy/blackbox/releases", "_blank")}
                >
                  <Chrome className="mr-2 h-5 w-5" />
                  Download Extension
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-cyan-500/20 text-cyan-600 hover:bg-cyan-500/10 hover:text-cyan-700 hover:border-cyan-500/30 dark:text-cyan-400 dark:hover:text-cyan-300 dark:hover:bg-cyan-500/10 transition-colors"
                  onClick={() => window.open("https://github.com/anudeepreddy/blackbox", "_blank")}
                >
                  <Github className="mr-2 h-5 w-5" />
                  Star on GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <BlackboxIcon size={24} />
              <span className="font-semibold">Blackbox</span>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              © 2025 Blackbox Extension. Built for developers, by developers.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
