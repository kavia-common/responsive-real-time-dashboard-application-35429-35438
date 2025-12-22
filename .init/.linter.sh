#!/bin/bash
cd /home/kavia/workspace/code-generation/responsive-real-time-dashboard-application-35429-35438/dashboard_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

